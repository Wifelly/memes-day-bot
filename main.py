from datetime import datetime, timedelta

from aiogram import Bot, Dispatcher, executor
from apscheduler.schedulers.asyncio import AsyncIOScheduler

# ⛔️⛔️⛔️ dont even think about stealing my api-key ⛔️⛔️⛔️
api_key = '2145447042:AAFOgh7jlHcDlccVKesN7xEZslEUfPP-gUQ'
group_id = -687621057
admin_id = 220077098

bot = Bot(token=api_key)
scheduler = AsyncIOScheduler()
dp = Dispatcher(bot)


async def main():
    cur_time = datetime.now()
    with open(f'images/{cur_time.month}/{cur_time.day}.jpg', 'rb') as f:
        await bot.send_photo(group_id, f, str(datetime.now().strftime('%d, %b %Y')))


if __name__ == '__main__':
    scheduler.add_job(
        main, trigger='interval', hours=24,
        next_run_time=datetime.now().replace(hour=0, minute=0, second=0, microsecond=0) + timedelta(hours=12)
    )
    scheduler.start()
    executor.start_polling(dp, skip_updates=True)
