#!/usr/bin/env python3
import os
from crontab import CronTab

def setup_cron():
    """
    Set up a cron job to run the TikTok scraper once a week.
    """
    try:
        # Get the current user's crontab
        cron = CronTab(user=True)
        
        # Get the absolute path to the script
        script_dir = os.path.dirname(os.path.abspath(__file__))
        tiktok_script_path = os.path.join(script_dir, 'tiktok_scraper.py')
        
        # Make sure the script is executable
        os.chmod(tiktok_script_path, 0o755)
        
        # Check if the job already exists
        existing_job = None
        for job in cron:
            if tiktok_script_path in job.command:
                existing_job = job
                break
        
        if existing_job:
            print("Cron job already exists, updating...")
            cron.remove(existing_job)
        
        # Create a new job to run once a week on Sunday at 1 AM
        job = cron.new(command=f"cd {script_dir}/.. && /usr/bin/python3 {tiktok_script_path}")
        job.setall('0 1 * * 0')  # Run at 1 AM every Sunday
        
        # Write the job to the crontab
        cron.write()
        
        print("Cron job has been set up successfully.")
        print("Job will run every Sunday at 1 AM.")
        
    except Exception as e:
        print(f"Error setting up cron job: {e}")

if __name__ == "__main__":
    setup_cron()