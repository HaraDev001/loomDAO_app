import React from 'react'; 
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { default as Elipsis } from '../../static/img/icons/Elipsis';
import { default as HeirloomSmallIcon} from '../../static/img/logo/HeirloomSmallIcon';
import { default as HeartIcon} from '../../static/img/icons/HeartIcon';

const LicenseOrSaleCard = (props) => {

    // on image click redirect to image
    const navigate = useNavigate();

    const handleImageClick = item => 
    item.type === 'license' ? 
    navigate(`/licenses/${item.id}`, {state: item}) :
    navigate(`/sales/${item.id}`, {state: item})
    
    return (
        <Card>
            <div className="header">
                <div className="top d-flex">
                    <div className="collection-provider-lister d-flex">
                        <img className="collection" src={props.collection.image} alt="collection" />
                        <img className="provider" src={props.provider.image} alt="provider" />
                        { props.type === "license" ? <img className="lister" src={props.lister.image} alt="lister" /> : null}
                    </div>
                    <div className="elipsis flex-grow-1 d-flex justify-content-end">
                        <button className="elipsis-button d-flex justify-content-center align-items-center">
                            <Elipsis />
                        </button> 
                    </div>
                </div>
                <div className="img-box" onClick={() => handleImageClick(props)}>
                    <img className="img-fluid" src={props.image} alt={props.type} />
                </div>
            </div>
            <div className="body">
                <div className="header d-flex pt-2">
                    <div className="license-name flex-grow-1">
                        <h6>{props.name} #{props.tokenId}</h6>
                    </div>
                    <div className="heirloom-icon">
                        <HeirloomSmallIcon />
                    </div>
                </div>
                <div className="price-box d-flex mt-1">
                    <h4 className="flex-grow-1">{props.price.toFixed(2)} HILO </h4>
                    <h4 className="text-end text-hl-light text-opacity-50 flex-shrink-1">{`${props.listedAmount}/${props.maxSupply}`}</h4>
                </div>
            </div>
            <div className="license-or-sale-card-footer d-flex">
                <div className="buy-now flex-grow-1">
                    <a className="btn text-hl-cta h8 p-0" >Buy Now</a>
                </div> 
                <div className="likes d-flex align-items-center">
                    <div className="likes-icon me-1">
                        <HeartIcon />
                    </div>
                    { props.likes }
                </div> 
            </div> 
        </Card>
    )
}

export default LicenseOrSaleCard;
