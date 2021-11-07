import DetailService from "../../../services/detailsService";

const getTrackDetail = async (id: number) => {
    let trackDetail: TrackDetail;
    trackDetail = await DetailService.trackDetailGet(id);
    return trackDetail;
}

export default getTrackDetail;