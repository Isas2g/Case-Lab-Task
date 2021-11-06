import api from '../../../shared/services/api';
import { authHeader } from '../../../shared/services/auth-header';
import catchError from "../../../shared/services/catchError";

const TrackService = {
  
  //tracks контроллер
  
  tracks: () => {
      return api.get(
          '/tracks',
          {
              headers: {...authHeader()}
          }
      ).then(
          (response) =>
              response.data.data
      ).catch((er) => catchError(er));
  },
  
  //track контроллеры

  trackPreview: async (fileData:any) => {
      let formData = new FormData()
      formData.append('file', fileData)
      const fileUrl = await api.post(
          '/track/preview',
          formData,
          {
              headers: {...authHeader()}
          }
      ).then(
          (response) =>
              response.data.data.file.url
      ).catch((er) => catchError(er));
      return fileUrl;
  },
  
  trackGet: (trackId: number) => {
      return api.get(
          `/track/${trackId}`,
          {
              headers: {...authHeader()}
          }
      ).then(
          (response) =>
              response.data.data
      ).catch((er) => catchError(er));
  },
  
  trackCreate: (data: TrackData) => {
      api.post(
          '/track/',
          data,
          {
              headers: {...authHeader()}
          }
      ).then((response) =>
          console.log(`${response.data.message} track "${data.name}"`)
      ).catch((er) => catchError(er));
  },
  
  trackUpdate: (track: Track) => {
      api.put(
          `/track/${track.id}`,
          track.data,
          {
              headers: {...authHeader()}
          }
      ).catch((er) => catchError(er));
  },
  
  trackDelete: (track: Track) => {
      api.delete(
          `/track/${track.id}`,
          {
              headers: {...authHeader()}
          }
      ).catch((er) => catchError(er));
  },
}

export default TrackService;