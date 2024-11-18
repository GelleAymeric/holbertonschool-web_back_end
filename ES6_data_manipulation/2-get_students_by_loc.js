/* eslint-disable */
export default function getStudentsByLocation(city) {
    return city.filter((student) => student.location === 'San Francisco');
}