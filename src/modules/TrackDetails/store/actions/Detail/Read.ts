import DetailService from "../../../services/detailsService";

const getTrackDetails = async (id:number) => {
    let trackDetails: Array<TrackDetail>;
    trackDetails = await DetailService.trackDetails(id);
    return trackDetails;
}

export const getTrackDetailCourses = async (searchQuery: string) => {
    let courses: Array<Course>;
    courses = await DetailService.trackDetailCoursesGet(searchQuery);
    return courses;
}

export const getTrackDetailEvents = async (searchQuery: string) => {
    let events: Array<Event>;
    events = await DetailService.trackDetailEventsGet(searchQuery);
    return events;
}

export default getTrackDetails;