import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';

import ListNotes from './components/ListNotes';
import {fetchNotes, fetchNote, UpdateNote} from './api';
/*Instead of using bind, arrow functions can be used */

var notes_temp=[
  {
    'id':1,
    'title':'Title is react note data',
    'content':'This is the content'
  },
  {
    'id':2,
    'title':'My Second note',
    'content':'And here is my second !'
  }


];

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      notes:[],
      current_note_id:0,
      is_creating:true, 
      is_fetching:true
    };
    this.handleItemClick=this.handleItemClick.bind(this);
    this.handleAddNote=this.handleAddNote.bind(this)
    this.getData=this.getData.bind(this);
  }
  componentDidMount(){
    this.getData();
  }

  async getData(){
    let data = await fetchNotes();
    this.setState({notes:data});
  }

  handleItemClick(id){
    this.setState((prevState)=>{
      return {is_creating:false, current_note_id:id}
    })
  }

  handleAddNote(){
    this.setState((prevState)=>{
      return {is_creating:true}
    })
  }

  render(){
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="10">
              <h2>
                Sticky Notes
              </h2>
            </Col>
            <Col xs="2">
              <Button color="primary" onClick={this.handleAddNote}>Create a new sticky</Button>
            </Col>
          </Row>

          <Row>
            <Col xs="4">
              <h5>
                <ListNotes notes={this.state.notes} handleItemClick={(id)=>this.handleItemClick(id)}/>
              </h5>
            </Col>
            <Col xs="8">
              <p>Content/Editing here...</p>
              {
                this.state.is_creating ?
                "creating now...":
                `Editing note with id: ${this.state.current_note_id}`
              }
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default App;
