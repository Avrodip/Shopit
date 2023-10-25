-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: shopit_new
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
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
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
  KEY `Product_id` (`Product_id`),
  KEY `Supplier_id` (`Supplier_id`),
  KEY `Admin_id` (`Admin_id`),
  CONSTRAINT `products_log_ibfk_1` FOREIGN KEY (`Product_id`) REFERENCES `products` (`Product_id`),
  CONSTRAINT `products_log_ibfk_2` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`),
  CONSTRAINT `products_log_ibfk_3` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_log`
--

LOCK TABLES `products_log` WRITE;
/*!40000 ALTER TABLE `products_log` DISABLE KEYS */;
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

-- Dump completed on 2023-10-25 10:37:08
