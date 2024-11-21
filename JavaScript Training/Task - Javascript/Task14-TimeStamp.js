function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor((seconds / 60));
    const hours =  Math.floor((seconds / 3600));
    const days = Math.floor(seconds / 86400);
    const months = Math.floor(seconds / (86400 * 30));
    const years =  Math.floor(seconds / (86400 * 365));

    if (years > 0) {
        return years ===1 ? "1year ago" : years + "year ago";
    } else if (months > 0) {
        return months ===1 ? "1 month ago" : months + "months ago";
    } else if (days > 0) {
        return days ===1 ? "1 day ago" : days + "days ago";
    } else if (hours > 0) {
        return hours ===1 ? "1 hour ago" : hours + "hours ago";
    } else if (minutes > 0) {
        return minutes ===1 ? "1 minute ago" : minutes + "minutes ago";
    } else if (seconds > 0) {
        return seconds ===1 ? "1 second ago" : seconds + "seconds ago";
    }
}
const inputDate = new Date("2024-11-02:17:01");
console.log(timeAgo(inputDate));