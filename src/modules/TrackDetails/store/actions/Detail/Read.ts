import DetailService from "../../../services/detailsService";

const getTrackDetails = async (id: number) => {
  return await DetailService.trackDetails(id);
};

export const getTrackDetailCourses = async (searchQuery: string) => {
  return await DetailService.trackDetailCoursesGet(searchQuery);
};

export const getTrackDetailEvents = async (searchQuery: string) => {
  return await DetailService.trackDetailEventsGet(searchQuery);
};

export default getTrackDetails;
