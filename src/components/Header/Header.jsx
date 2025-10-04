import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PATH } from "../../routes/path";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="bg-surface shadow-soft border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500 rounded-lg">
            <FaBuilding className="h-6 w-6 text-gray-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AptCare</h1>
            <p className="text-xs text-gray-600">Quản lý sửa chữa căn hộ</p>
          </div>
        </div>

        <Link to={PATH.AUTH_LOGIN}>
          <Button
            variant="contained"
            endIcon={<FaArrowRight />}
            sx={{
              py: 1.5,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",
              },
              transition: "all 0.3s ease",
              maxWidth: 300,
            }}
          >
            {" "}
            Đăng nhập
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
