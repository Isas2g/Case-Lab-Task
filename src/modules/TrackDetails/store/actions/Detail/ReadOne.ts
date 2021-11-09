import DetailService from "../../../services/detailsService";

const getTrackDetail = async (id: number) => {
  return await DetailService.trackDetailGet(id);
};

export default getTrackDetail;
