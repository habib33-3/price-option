import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-500 rounded-md p-5 text-white flex flex-col justify-between">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-4xl text-center my-8">{name}</h4>
      <div className="">
        {features.map((feature, idx) => (
          <p key={idx}>
            <AiFillCheckCircle className="text-green-500 inline mr-3"></AiFillCheckCircle>
            {feature}
          </p>
        ))}
      </div>

      <button className="btn btn-success mt-12 w-full font-bold">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
