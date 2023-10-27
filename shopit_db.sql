-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: new_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `Admin_id` int NOT NULL AUTO_INCREMENT,
  `First_name` varchar(45) DEFAULT NULL,
  `Last_name` varchar(45) DEFAULT NULL,
  `Position` varchar(45) DEFAULT NULL,
  `Hire_date` date DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Email` varchar(60) DEFAULT NULL,
  `Username` varchar(45) NOT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`Admin_id`),
  CONSTRAINT `admins_chk_1` CHECK ((length(`password`) > 7))
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (101,'Deepali','Mahato','Intern','2023-09-15','7389573480','ahemdabad ','deepalimahato1019 ','dp_1910','Deepali219'),(102,'Mohit ','Sharma','Intern','2022-10-02','9091032345','Raipur','mohitsharma20@gmail.com','mohit_20','mohit2123'),(103,'Rahul','Ved','Intern','2020-05-15','8912893478','Mumbai','rahulved34@gmail.com','rahul_34','rahul@123'),(104,'Priyanka','Sao','Assistant ','2022-12-01','8901278600','Delhi ','priyankasao26@gmail.com','priyanka_26','78werttt@'),(105,'Pihu','Mahato','Intern','2023-01-10','8901289765','Kolkata','pihumahato76@gmail.com','pihu_76','priya2143'),(106,'Vandana','Ranjan','Intern','2023-09-15','7992335006','Bangalore','vandu@gmail.com','vandu_rnjn','vandu.00');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `Order_details_id` int NOT NULL,
  `Order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  `Discount` decimal(10,2) DEFAULT NULL,
  `Pay_total` decimal(10,2) NOT NULL,
  `Supplier_id` int DEFAULT NULL,
  `Shipment_id` int DEFAULT NULL,
  PRIMARY KEY (`Order_details_id`),
  KEY `Order_id_idx` (`Order_id`),
  KEY `Shipment_id_idx` (`Shipment_id`),
  KEY `Supplier_id_idx` (`Supplier_id`),
  KEY `Product_id _idx` (`product_id`),
  CONSTRAINT `Order_id` FOREIGN KEY (`Order_id`) REFERENCES `orders` (`Orders_id`),
  CONSTRAINT `Product_id ` FOREIGN KEY (`product_id`) REFERENCES `products` (`Product_id`),
  CONSTRAINT `Shipment_id` FOREIGN KEY (`Shipment_id`) REFERENCES `shipments` (`Shipment_id`),
  CONSTRAINT `Supplier_id` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Orders_id` int NOT NULL AUTO_INCREMENT,
  `User_id` int NOT NULL,
  `Order_date` date NOT NULL,
  `Payment_id` varchar(45) DEFAULT NULL,
  `Payment_method` varchar(45) DEFAULT NULL,
  `Pay_total` decimal(10,2) NOT NULL,
  `Order_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Orders_id`),
  KEY `user_id_idx` (`User_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`User_id`) REFERENCES `users` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2320 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (123,1003,'2022-10-11','yusufsk@okaxis','UPI',5780.90,'confirmed '),(2319,1005,'2022-09-13','deepika@ybl','UPI',890.00,'shipped ');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Product_id` int NOT NULL AUTO_INCREMENT,
  `Product_name` varchar(255) DEFAULT NULL,
  `Description` text,
  `Supplier_price` decimal(10,2) NOT NULL,
  `Sell_price` decimal(10,2) NOT NULL,
  `Product_category` varchar(25) NOT NULL,
  `Supplier_id` int NOT NULL,
  `Admin_id` int NOT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `Supplier_id_idx` (`Supplier_id`),
  KEY `Admin_id_idx` (`Admin_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1001,'Adidas Running Shoes','Comfortable for Running',1099.00,1599.99,'Shoes',501,101),(1002,'Red Tape Running Shoes','Comfortable for Running',1399.00,1799.99,'Shoes',501,101),(1003,'Baggit Bagpack','Premium Bagpack',899.00,1299.00,'Bagpack',505,102),(1004,'Puma Shoes','Sports Shoes',1299.00,1599.00,'Shoes',503,103),(1005,'Nike Shoes','Casual Shoes',999.00,1299.00,'Shoes',504,104);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_log`
--

DROP TABLE IF EXISTS `products_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_log` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `operation_type` enum('INSERT','UPDATE','DELETE') NOT NULL,
  `operation_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Product_id` int DEFAULT NULL,
  `Product_name` varchar(255) DEFAULT NULL,
  `Description` text,
  `Supplier_price` decimal(10,2) NOT NULL,
  `Sell_price` decimal(10,2) NOT NULL,
  `Product_category` varchar(25) NOT NULL,
  `Supplier_id` int DEFAULT NULL,
  `Admin_id` int DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `Supplier_id` (`Supplier_id`),
  KEY `Admin_id` (`Admin_id`),
  KEY `Product_id` (`Product_id`),
  CONSTRAINT `products_log_ibfk_1` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`),
  CONSTRAINT `products_log_ibfk_2` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `products_log_ibfk_3` FOREIGN KEY (`Product_id`) REFERENCES `products` (`Product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_log`
--

LOCK TABLES `products_log` WRITE;
/*!40000 ALTER TABLE `products_log` DISABLE KEYS */;
INSERT INTO `products_log` VALUES (1,'UPDATE','2023-10-23 05:55:59',1001,'Adidas Running Shoes','Comfortable for Running',1099.00,1399.00,'Shoes',501,101),(2,'UPDATE','2023-10-23 05:56:37',1002,'Red Tape Running Shoes','Comfortable for Running',1399.00,1699.00,'Shoes',501,101);
/*!40000 ALTER TABLE `products_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipments`
--

DROP TABLE IF EXISTS `shipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipments` (
  `Shipment_id` int NOT NULL AUTO_INCREMENT,
  `Order_details_id` int NOT NULL,
  `Shipment_date` date DEFAULT NULL,
  `Shipment_address` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Tracking_id` varchar(45) DEFAULT NULL,
  `Admin_id` int NOT NULL,
  PRIMARY KEY (`Shipment_id`),
  KEY `Order_details_id _idx` (`Order_details_id`),
  KEY `Admin_id_idx` (`Admin_id`),
  KEY `Admin_id_idx1` (`Admin_id`,`Order_details_id`),
  CONSTRAINT `fk_admin` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `Order_details_id ` FOREIGN KEY (`Order_details_id`) REFERENCES `orderdetails` (`Order_details_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `Supplier_id` int NOT NULL AUTO_INCREMENT,
  `Company_name` varchar(45) DEFAULT NULL,
  `Supplier_name` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Phone` varchar(16) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Admin_id` int NOT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`Supplier_id`),
  KEY `admin_id_idx` (`Admin_id`),
  CONSTRAINT `admin_id` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `suppliers_chk_1` CHECK ((length(`password`) > 7))
) ENGINE=InnoDB AUTO_INCREMENT=506 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (501,'bata','mukesh ','mukeshverma13@gmail.com','7823345908','delhi',101,'mukesh_90','45678901'),(502,'veromoda','ritu','ritukumari16@gmail.com','8912347700','delhi',102,'ritu_kk','88888888888888'),(503,'puma','reena','reenagupta10@gmail.com','9802783410','jaipur',103,'reena_g15','9999911111'),(504,'nike','priya','priyashukla34@gmail.com','8901235641','kerala',104,'prira_k56','566667771'),(505,'baggit','Kartik ','kartikv345@gmail.com','8704590111','jaipur',105,'kartik_aa','ujkrrrrrr');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `User_id` int NOT NULL AUTO_INCREMENT,
  `First_name` varchar(45) DEFAULT NULL,
  `Last_name` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `Email` varchar(60) DEFAULT NULL,
  `Username` varchar(45) NOT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`User_id`),
  CONSTRAINT `users_chk_1` CHECK ((length(`password`) > 7))
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1001,'vandana','ranjan','patna','9980912345','vandana187@gmail.com','vandana_18','23456789'),(1002,'riya','kumari','delhi','8999912999','riyasam12@gmail.com','riya_12','900000000'),(1003,'neha','verma','jaipur','7777234009','nehaverma90@gmail.com','neha_90','78888ffffff'),(1004,'pratik','kumar','mumbai','7812345670','pratikk7891@gmail.com','pratik_78','kkjhh1#oo'),(1005,'suman','viswas','jodhpur','8912652009','sumanbk3412@gmail.com','suman_21','iioogg$4$$');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-25 12:39:09
