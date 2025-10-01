import buildingImage from "../../../assets/auth-building.jpg";
import AuthForm from "../../../components/Auth/AuthForm";
import FloatingImage from "../../../components/FloatingImage/FloatingImage";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="hidden lg:block space-y-6 animate-slide-in">
          <div className="space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Quản lý sửa chữa
              <span className="block text-blue-500">thông minh</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              AptCare giúp bạn quản lý và theo dõi các công việc sửa chữa, bảo
              trì trong căn hộ và chung cư một cách hiệu quả và chuyên nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Theo dõi real-time</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Báo cáo chi tiết</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Quản lý đa dự án</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Thông báo tự động</span>
            </div>
          </div>

          <div className="max-w-4xl w-full relative">
            <FloatingImage
              src={buildingImage}
              alt="AptCare - Quản lý sửa chữa căn hộ"
              className="w-full h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 rounded-lg pointer-events-none"></div>
          </div>
        </div>

        {/* Auth Form Section */}
        <div className="flex items-center justify-center animate-fade-in">
          <AuthForm />
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="lg:hidden fixed top-4 left-4 right-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">AptCare</h1>
        <p className="text-sm text-gray-600">
          Quản lý sửa chữa căn hộ & chung cư
        </p>
      </div>
    </div>
  );
};

export default Login;
