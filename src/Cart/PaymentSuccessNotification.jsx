import { FaRegCheckCircle } from "react-icons/fa";

export default function PaymentSuccessNotification({isPaymentSuccess,displayTotal}) {

console.log(isPaymentSuccess);


if(isPaymentSuccess){
return (
    <div className="min-h-screen flex items-center justify-center p-4 row-start-1 col-start-3">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center animate-bounce-in">
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale">
          <FaRegCheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Success!</h2>
        <p className="text-lg text-gray-600 mb-6">Payment completed</p>
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
            ₹{displayTotal}.00
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-scale {
          animation: scale 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );





}
  
}