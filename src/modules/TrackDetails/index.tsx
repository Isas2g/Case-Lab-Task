import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router"

export const TrackDetailPage: React.FC = (props: any) => {
  
  const history = useHistory();
  
  const goBack = () => {
    history.goBack();
  }
  
  return (
    <Container>
      Это элемент трека с номером(не порядковым) - {props.match.params.id}
      
      <div className="d-flex justify-content-center">
        <div style={{width: "200px", height: "200px", background: "#000"}}>
        </div>
      </div>
      
      <Button variant={"outline"} className={"btn fourth"} onClick={goBack}>Вернуться к треку</Button>
    </Container>
  )
}