import DetailService from "../../../services/detailsService";

const getTrackDetails = async (id:number) => {
    let trackDetails: Array<TrackDetail>;
    trackDetails = await DetailService.trackDetails(id);
    return trackDetails;
}

export default getTrackDetails;