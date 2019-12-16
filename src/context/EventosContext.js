import React, { Component } from "react";
import axios from "axios";

//Crear el context
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "NWL7K2IZKBTV6WJCVXLG";
  ordenar = "date";
  state = {
    eventos: []
  };

  obtenerEventos = async busqueda => {
    let url = `https://www.eventbriteapi.com/v3/events/serach/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    //Consultar la api con la url
    const eventos = await axios.get(url);
    console.log(eventos);
  };

  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
