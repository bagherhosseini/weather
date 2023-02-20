export default function ShortenedWeekDays({ date }) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const options = { weekday: 'short' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);

    return <div>{weekdays[new Date(date).getDay()]}</div>;
}