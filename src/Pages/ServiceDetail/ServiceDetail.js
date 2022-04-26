import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>service details: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proced Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetail;