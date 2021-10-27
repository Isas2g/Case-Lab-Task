import api from './api';
import { authHeader } from './auth-header';

export const TrackService = {
  //обработчик ошибок axios

  catchError: (error: any) =>  {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);

    return null;
  },
  
  //tracks контроллер
  
  tracks: () => {
      return api.get(
          '/tracks',
          {
              headers: {...authHeader()}
          }
      );
  },
  
  //track контроллеры
  
  trackGet: (trackId: string) => {
      return api.get(
          `/track/${trackId}`,
          {
              headers: {...authHeader()}
          }
      );
  },
  
  trackCreate: (data: TrackData) => {
      return api.post(
          '/track/',
          data,
          {
              headers: {...authHeader()}
          }
      );
  },
  
  trackUpdate: (track: Track) => {
      return api.put(
          `/track/${track.id}`,
          track.data,
          {
              headers: {...authHeader()}
          }
      );
  },
  
  trackDelete: (track: Track) => {
      return api.delete(
          `/track/${track.id}`,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data);
          success = response.data.success;
      }).catch((er) => this.catchError(er));
      return success;*/
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
  
  //trackDetails контроллер
  
  trackDetails: (track: Track) => {
      return api.get(
          `/track/${track.id}/details`,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return data.map( (item) => {
              return new TrackDetail({
                  id: item.id,
                  trackId: item.trackId,
                  finished: item.finished,
                  assigned: item.assigned,
                  epilogId: item.epilogId,
                  epilogFinished: item.epilogFinished,
                  entityName: item.entityName,
                  entityDuration: item.entityDuration,
                  data: item.data
              });
          }
      );*/
  },
  
  //trackDetail контроллеры
  
  trackDetailGet: (detailId: string) => {
      return api.get(
          `/track/detail/${detailId}`,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return new TrackDetail({
          id: data.id,
          trackId: data.trackId,
          finished: data.finished,
          assigned: data.assigned,
          epilogId: data.epilogId,
          epilogFinished: data.epilogFinished,
          entityName: data.entityName,
          entityDuration: data.entityDuration,
          data: data.data
      });*/
  }, 
  
  trackDetailCreate: (detailData: TrackDetail) => {
      return api.post(
          `/track/${detailData.trackId}/detail`,
          detailData,
          {
              headers: {...authHeader()}
          }
      );/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return data;*/
  },
  
  trackDetailUpdate: (detail: TrackDetail) => {
      return api.put(
          `/track/detail/${detail.id}`,
          detail.data,
          {
              headers: {...authHeader()}
          }
      )/*.then( (response) => {
          console.log(response.data.data);
          data = response.data.data;
      }).catch((er) => this.catchError(er));
      return data;*/
  },
  
  trackDetailDelete: (detail: TrackDetail) =>{
      return api.delete(
          `/track/detail/${detail.id}`,
          {
              headers: {...authHeader()}
          }
      )/*.then( (response) => {
          console.log(response.data);
          success = response.data.success;
      }).catch((er) => this.catchError(er));
      return success;*/
  }

//trackDetailEpilog контроллеры

};