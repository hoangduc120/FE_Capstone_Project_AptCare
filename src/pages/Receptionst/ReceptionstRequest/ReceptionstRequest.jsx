import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BsFillHouseDoorFill, BsLightningFill, BsShieldFill, BsThreeDots } from "react-icons/bs";
import { FaArrowLeft, FaBuilding, FaClock, FaEnvelope, FaPhone, FaTools, FaUser } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { IoDocument, IoSend } from "react-icons/io5";
import { MdApartment, MdDescription, MdPerson, MdTitle } from "react-icons/md";
import * as Yup from "yup";
  
  const ReceptionstRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
  
    const handleSubmit = (values) => {
      setIsLoading(true);
      console.log("ReceptionstRequest:", values);
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 1500);
    };
  
    const categories = [
      { value: "plumbing", label: "Hệ thống nước", icon: <GiWaterDrop />, color: "#2196F3" },
      { value: "electricity", label: "Hệ thống điện", icon: <BsLightningFill />, color: "#FFC107" },
      { value: "security", label: "Hệ thống an ninh", icon: <BsShieldFill />, color: "#4CAF50" },
      { value: "other", label: "Khác", icon: <BsThreeDots />, color: "#9E9E9E" },
    ];
  
    const priorities = [
      { value: "normal", label: "Bình thường", color: "#4CAF50" },
      { value: "high", label: "Khẩn cấp", color: "#FF5722" },
    ];
  
    const floors = Array.from({ length: 20 }, (_, i) => i + 1);
  
    const validationSchema = Yup.object({
      floor: Yup.string().required("Vui lòng chọn tầng"),
      apartment: Yup.string().required("Vui lòng nhập số căn hộ"),
      residentName: Yup.string().required("Vui lòng nhập tên cư dân"),
      residentPhone: Yup.string()
        .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
      category: Yup.string().required("Vui lòng chọn loại công việc"),
      priority: Yup.string().required("Vui lòng chọn độ ưu tiên"),
      title: Yup.string().required("Vui lòng nhập tiêu đề"),
      description: Yup.string()
        .min(20, "Mô tả phải có ít nhất 20 ký tự")
        .required("Vui lòng nhập mô tả chi tiết"),
    });
  
    return (
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4,
      }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
          {/* Header Section */}
          <Paper 
            elevation={0} 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 3,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton 
                sx={{ 
                  bgcolor: 'rgba(102, 126, 234, 0.2)',
                  color: '#667eea',
                  '&:hover': { bgcolor: '#667eea', color: 'white' }
                }}
              >
                <FaArrowLeft />
              </IconButton>
              <Box>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#667eea' }}>
                  Tạo Yêu Cầu Sửa Chữa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lễ tân gửi yêu cầu thay cho cư dân
                </Typography>
              </Box>
            </Box>
            <Chip 
              icon={<FaTools />}
              label="Yêu cầu mới"
              color="primary"
              sx={{ fontWeight: 'bold', bgcolor: '#667eea', color: 'white' }}
            />
          </Paper>
  
          {showSuccess && (
            <Alert 
              severity="success" 
              sx={{ 
                mb: 3, 
                borderRadius: 2,
                boxShadow: 2,
                animation: 'slideInDown 0.3s ease-out'
              }}
            >
              Yêu cầu đã được gửi thành công! Mã yêu cầu: #REQ2024001
            </Alert>
          )}
  
          <Card 
            sx={{ 
              borderRadius: 3,
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              overflow: 'visible'
            }}
          >
            <Box sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              p: 3,
              color: 'white'
            }}>
              <Typography variant="h5" fontWeight="600" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IoDocument /> Thông Tin Yêu Cầu
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                Vui lòng điền đầy đủ thông tin để chúng tôi có thể xử lý yêu cầu nhanh chóng
              </Typography>
            </Box>
  
            <CardContent sx={{ p: 4 }}>
              <Formik
                initialValues={{
                  floor: "",
                  apartment: "",
                  residentName: "",
                  residentPhone: "",
                  residentEmail: "",
                  category: "",
                  priority: "",
                  title: "",
                  description: "",
                  preferredTime: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <Form>
                    {/* Section 1: Thông tin căn hộ */}
                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 2, mb: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3, 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          color: '#667eea'
                        }}
                      >
                        <BsFillHouseDoorFill /> Thông Tin Căn Hộ
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                        <FormControl fullWidth>
                          <InputLabel>Tầng *</InputLabel>
                          <Select
                            name="floor"
                            value={values.floor}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.floor && Boolean(errors.floor)}
                            label="Tầng *"
                            startAdornment={
                              <InputAdornment position="start">
                                <FaBuilding color="#667eea" />
                              </InputAdornment>
                            }
                          >
                            {floors.map((floor) => (
                              <MenuItem key={floor} value={floor}>
                                Tầng {floor}
                              </MenuItem>
                            ))}
                          </Select>
                          {touched.floor && errors.floor && (
                            <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                              {errors.floor}
                            </Typography>
                          )}
                        </FormControl>
  
                        <TextField
                          name="apartment"
                          label="Số căn hộ *"
                          fullWidth
                          value={values.apartment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.apartment && Boolean(errors.apartment)}
                          helperText={touched.apartment && errors.apartment}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdApartment color="#667eea" />
                              </InputAdornment>
                            ),
                          }}
                          placeholder="VD: A101, B205..."
                        />
                      </Box>
                    </Paper>
  
                    {/* Section 2: Thông tin cư dân */}
                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'blue.50', borderRadius: 2, mb: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3, 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          color: '#667eea'
                        }}
                      >
                        <MdPerson /> Thông Tin Cư Dân
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                        <TextField
                          name="residentName"
                          label="Tên cư dân *"
                          fullWidth
                          value={values.residentName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.residentName && Boolean(errors.residentName)}
                          helperText={touched.residentName && errors.residentName}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaUser color="#667eea" />
                              </InputAdornment>
                            ),
                          }}
                          placeholder="Nhập họ và tên"
                        />
  
                        <TextField
                          name="residentPhone"
                          label="Số điện thoại *"
                          fullWidth
                          value={values.residentPhone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.residentPhone && Boolean(errors.residentPhone)}
                          helperText={touched.residentPhone && errors.residentPhone}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaPhone color="#667eea" />
                              </InputAdornment>
                            ),
                          }}
                          placeholder="0901234567"
                        />
                      </Box>
  
                      <TextField
                        name="residentEmail"
                        label="Email (Tùy chọn)"
                        fullWidth
                        type="email"
                        value={values.residentEmail}
                        onChange={handleChange}
                        sx={{ mt: 3 }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaEnvelope color="#667eea" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="email@example.com"
                      />
                    </Paper>
  
                    {/* Section 3: Chi tiết yêu cầu */}
                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'purple.50', borderRadius: 2, mb: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3, 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1,
                          color: 'primary.main'
                        }}
                      >
                        <FaTools /> Chi Tiết Yêu Cầu
                      </Typography>
  
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
                        <FormControl fullWidth>
                          <InputLabel>Danh mục *</InputLabel>
                          <Select
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Danh mục *"
                            error={touched.category && Boolean(errors.category)}
                          >
                            {categories.map((cat) => (
                              <MenuItem key={cat.value} value={cat.value}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Box sx={{ color: cat.color }}>{cat.icon}</Box>
                                  {cat.label}
                                </Box>
                              </MenuItem>
                            ))}
                          </Select>
                          {touched.category && errors.category && (
                            <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                              {errors.category}
                            </Typography>
                          )}
                        </FormControl>
  
                        <FormControl fullWidth>
                          <InputLabel>Độ ưu tiên *</InputLabel>
                          <Select
                            name="priority"
                            value={values.priority}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Độ ưu tiên *"
                            error={touched.priority && Boolean(errors.priority)}
                          >
                            {priorities.map((priority) => (
                              <MenuItem key={priority.value} value={priority.value}>
                                <Chip 
                                  label={priority.label} 
                                  size="small"
                                  sx={{ 
                                    bgcolor: priority.color,
                                    color: 'white',
                                    fontWeight: 'bold'
                                  }}
                                />
                              </MenuItem>
                            ))}
                          </Select>
                          {touched.priority && errors.priority && (
                            <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                              {errors.priority}
                            </Typography>
                          )}
                        </FormControl>
                      </Box>
  
                      <TextField
                        name="title"
                        label="Tiêu đề yêu cầu *"
                        fullWidth
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && errors.title}
                        sx={{ mb: 3 }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MdTitle color="#667eea" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="VD: Rò rỉ nước tại phòng tắm"
                      />
  
                      <TextField
                        name="description"
                        label="Mô tả chi tiết *"
                        fullWidth
                        multiline
                        rows={4}
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.description && Boolean(errors.description)}
                        helperText={touched.description && errors.description}
                        sx={{ mb: 3 }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                              <MdDescription color="#667eea" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Mô tả chi tiết về vấn đề cần sửa chữa..."
                      />
  
                      <TextField
                        name="preferredTime"
                        label="Thời gian mong muốn"
                        type="datetime-local"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={values.preferredTime}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaClock color="#667eea" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Paper>
  
                    {/* Action Buttons */}
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      justifyContent: 'center',
                      mt: 4
                    }}>
                      <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={isLoading}
                        startIcon={!isLoading && <IoSend />}
                        sx={{ 
                          py: 1.5,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
                          },
                          transition: 'all 0.3s ease',
                          maxWidth: 300
                        }}
                      >
                        {isLoading ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "Gửi Yêu Cầu"
                        )}
                      </Button>
  
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ 
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          borderWidth: 2,
                          borderColor: '#667eea',
                          color: '#667eea',
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: '#764ba2',
                            bgcolor: 'rgba(102, 126, 234, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                          maxWidth: 300
                        }}
                      >
                        Hủy Bỏ
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>        
        </Box>
      </Box>
    );
  };
  
  export default ReceptionstRequest;