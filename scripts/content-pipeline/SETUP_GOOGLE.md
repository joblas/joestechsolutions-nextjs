# How to Setup Google Service Account

To use the Google Docs automation, you need a Service Account. Follow these steps:

## 1. Create a Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown at the top and select **"New Project"**.
3. Name it `ai-blog-automation` (or similar) and click **Create**.

## 2. Enable APIs
1. In the left sidebar, go to **APIs & Services > Library**.
2. Search for **"Google Docs API"** and click **Enable**.
3. Go back to the Library.
4. Search for **"Google Drive API"** and click **Enable**.

## 3. Create Service Account & Key
1. Go to **APIs & Services > Credentials**.
2. Click **+ CREATE CREDENTIALS** and select **Service Account**.
3. Name it `content-bot` and click **Create and Continue**.
4. (Optional) Role: Select **Editor** (Project > Editor) just to be safe, then click **Done**.
5. In the list of Service Accounts, click on the email address of the one you just created (e.g., `content-bot@...`).
6. Go to the **KEYS** tab.
7. Click **ADD KEY > Create new key**.
8. Select **JSON** and click **Create**.
9. The file will automatically download to your computer.

### Troubleshooting: "Key creation is disabled"
If you see an error saying "Service account key creation is disabled":
1. Search for **"Organization Policies"** in the top search bar and click it.
2. In the filter list, type/select `iam.disableServiceAccountKeyCreation`.
3. Click on that policy name to edit it.
4. Click **Manage Policy** (or "Edit").
5. Select **Override parent's policy**.
6. Under Rules, select **Not enforced** (or "Off").
7. Click **Set Policy** / **Save**.
8. Go back and try creating the key again.

## 4. Install the Key
1. Rename the downloaded file to `service-account.json`.
2. Move it to your project root folder: `joestechsolutions-nextjs/service-account.json`.
   *(Or update your .env file to point to its location if you put it elsewhere)*

## 5. Share Your Drive Folder (Critical Step!)
The Service Account creates files in its own private space by default. To see them in your Drive:
1. Create a folder in your Google Drive (e.g., "AI Blog Drafts").
2. Right-click the folder > **Share**.
3. **Paste the Service Account email** (found in the JSON file under `client_email`, looks like `content-bot@project-id.iam.gserviceaccount.com`).
4. Make sure it has **Editor** permission.
5. Click **Send**.
6. Copy the **Folder ID** from the URL (the random string after `folders/`) and add it to your `.env` file as `GOOGLE_DRIVE_FOLDER_ID`.
