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
  
  //trackAssign контроллер
  
  trackAssign: (assignId: string, newStatus: Status) => {
      return api.patch(
          `/trackAssign/${assignId}`,
          {
              "status": newStatus
          },
          {
              headers: {...authHeader()}
          });/*.then( (response) => {
              console.log(response.data);
              success = response.data.success;
          }).catch((er) => this.catchError(er));
      return success;*/
  },
  
  //trackAssigns контроллеры
  
  trackAssigns: (track: Track) => {
      return api.get(
          `/track/${track.id}/trackAssigns`,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return data;*/
  },
  
  trackAssignsAdd: (track: Track, usersList: []) => {
      const transferredData = usersList.map( (item) => {
          return {
              "userId": item
          }
      });
      return api.post(
          `/track/${track.id}/trackAssigns`,
          transferredData,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return data;*/
  },
  
  trackAssignsDelete: (track: Track, assignsIdList: string[]) => {
      return api.delete(
          `/track/${track.id}/trackAssigns`,
          {
              headers: {...authHeader()},
              data: {
                  assignsIdList
              }
          }
      );/*.then( (response) => {
          console.log(response.data);
          success = response.data.success;
      }).catch((er) => this.catchError(er));
      return success;*/
  },
}

export default TrackService;