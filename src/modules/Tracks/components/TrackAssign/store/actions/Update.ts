import TrackAssignService from "../../../../services/trackAssignServices";

const patchTrackAssign = async (assignId: number, status: Status) => {

    return await TrackAssignService.patchTrackAssign(assignId, status).then();
}

export default patchTrackAssign;