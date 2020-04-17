import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { removeCar } action here

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = () => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    }
}

// add mapDispatchToProps function here

export default connect(mapStateToProps)(Dashboard)