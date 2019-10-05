import React from 'react'
import { Link } from 'react-router-dom';
import PublicationItem  from '../PublicationItem'
import ProfileBoxComponent from '../../components/ProfileBoxComponent'
const VolunteersPage = () => {
    return(
        <div className="volunteers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div className="row">
                            <div className="col-12">Titulo Lorem Ipsum</div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card applications" >
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>Mis Postulaciones</h6>
                                        </div>
                                        <div className="card application">
                                            <div className="application-image">
                                                <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/83126/preview.svg" className="publication-image-logo" width="25" />
                                            </div>
                                            <div className="application-text">
                                                Marcha por el cambio climatico
                                            </div>
                                            <div className="application-button">
                                                <button className="btn btn-sm btn-warning">X</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h4>Próximos eventos</h4> 
                                </div>
                                <input type="text" className="form-control search" placeholder="Busqueda" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <PublicationItem />
                            </div>
                        </div>
                    </div>
                     <div className="col-2">
                        <ProfileBoxComponent />
                    </div>             
                </div>
            </div>
        </div>
    )
}

export default VolunteersPage;
