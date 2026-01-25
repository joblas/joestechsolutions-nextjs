import json
import os
from datetime import datetime
from pathlib import Path
from models import UsageLog, DailyUsage
from rich.console import Console

console = Console()

BASE_DIR = Path(__file__).parent
USAGE_LOG_PATH = BASE_DIR / "logs" / "usage.json"
DAILY_BUDGET = 5.00 # USD

# Pricing for Claude 3.5 Sonnet (approximate)
INPUT_PRICE_PER_M = 3.00
OUTPUT_PRICE_PER_M = 15.00

def get_usage_log() -> UsageLog:
    USAGE_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    if USAGE_LOG_PATH.exists():
        try:
            with open(USAGE_LOG_PATH, "r") as f:
                return UsageLog(**json.load(f))
        except:
            return UsageLog()
    return UsageLog()

def save_usage_log(log: UsageLog):
    with open(USAGE_LOG_PATH, "w") as f:
        f.write(log.model_dump_json(indent=2))

def track_usage(tokens_input: int, tokens_output: int):
    log = get_usage_log()
    date_str = datetime.now().strftime("%Y-%m-%d")
    
    if date_str not in log.daily:
        log.daily[date_str] = DailyUsage(date=date_str)
        
    daily = log.daily[date_str]
    daily.tokens_input += tokens_input
    daily.tokens_output += tokens_output
    
    cost = (tokens_input / 1_000_000 * INPUT_PRICE_PER_M) + (tokens_output / 1_000_000 * OUTPUT_PRICE_PER_M)
    daily.cost_usd += cost
    log.total_cost += cost
    
    save_usage_log(log)
    
    # Warnings
    if daily.cost_usd >= DAILY_BUDGET:
        console.print(f"[bold red]BUDGET EXCEEDED:[/bold red] Daily spend ${daily.cost_usd:.2f} >= ${DAILY_BUDGET:.2f}")
    elif daily.cost_usd >= DAILY_BUDGET * 0.8:
        console.print(f"[bold yellow]BUDGET WARNING:[/bold yellow] Daily spend ${daily.cost_usd:.2f} reached 80% of ${DAILY_BUDGET:.2f}")

def is_within_budget() -> bool:
    log = get_usage_log()
    date_str = datetime.now().strftime("%Y-%m-%d")
    if date_str in log.daily:
        return log.daily[date_str].cost_usd < DAILY_BUDGET
    return True
