export const TrackDetailPage: React.FC = (props: any) => {
  return (
    <div>
      Это элемент трека с номером(не порядковым) - {props.match.params.id}
      
      <div className="d-flex justify-content-center">
        <div style={{width: '200px', height: '200px', background: '#000'}}>
        </div>
      </div>
      
    </div>
  )
}