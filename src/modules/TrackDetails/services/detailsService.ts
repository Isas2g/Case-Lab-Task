import api from "../../../shared/services/api";
import {authHeader} from "../../../shared/services/auth-header";
import catchError from "../../../shared/services/catchError";

const DetailService = {

    //trackDetails контроллер

    trackDetails: (trackId: number) => {
        return api.get(
            `/track/${trackId}/details`,
            {
                headers: {...authHeader()}
            }
        ).then(
            (response) =>
                response.data.data
        ).catch((er) => catchError(er));
    },

    //trackDetail контроллеры

    trackDetailGet: (detailId: number) => {
        return api.get(
            `/track/detail/${detailId}`,
            {
                headers: {...authHeader()}
            }
        ).then(
            (response) =>
                response.data.data
        ).catch((er) => catchError(er))
    },

    trackDetailCreate: (detailData: TrackDetailData, trackId:number) => {
        return api.post(
            `/track/${trackId}/detail`,
            detailData,
            {
                headers: {...authHeader()}
            }
        ).then( (response) =>
            response.data.data
        ).catch((er) => catchError(er));
    },

    trackDetailUpdate: (detail: TrackDetailData, detailId: number) => {
        return api.put(
            `/track/detail/${detailId}`,
            detail,
            {
                headers: {...authHeader()}
            }
        ).catch((er) => catchError(er));
    },

    trackDetailDelete: (detail: TrackDetail) =>{
        return api.delete(
            `/track/detail/${detail.id}`,
            {
                headers: {...authHeader()}
            }
        ).then( (response) =>
            response.data.success
        ).catch((er) => catchError(er));
    },
    
    trackDetailCoursesGet: (searchQuery: string) => {
        return api.get(
            `/search/courses?q=${searchQuery}`,
            {
                headers: {...authHeader()}
            }
        ).then( (response) =>
            response.data
        ).catch((er) => catchError(er));
        
    },
    
    trackDetailEventsGet: (searchQuery: string) => {
        return api.get(
            `/search/events?q=${searchQuery}`,
            {
                headers: {...authHeader()}
            }
        ).then( (response) =>
            response.data
        ).catch((er) => catchError(er));
    }
}

export default DetailService;