import React, { Component } from 'react';
import pets from '../../sevices/pets.json';
import style from './Pets.module.css';


const getIdFromProps = props => props.match.params.id;

class PetsAbout extends Component {
    state = {
        item: null,

    }

    componentDidMount() {
        const idItem = getIdFromProps(this.props);
        // console.log(id);
        this.setState({
            item: [...pets],
            idItem: idItem,
        });

    }
    render() {
        console.log('props', this.props.match.params.id);
        const { idItem, item } = this.props;
        return (
            <>
                {/* {item.map(ite => (

                    <div>
                        <img className={style.img} src={ite.image} alt={ite.breed} />
                        <h3>Name: {item.name} </h3>
                        <span>gender: {ite.gender}</span>
                    </div>
                ))} */}
                asdasdas
            </>
        )
    }
}

export default PetsAbout;