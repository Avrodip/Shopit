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
  `imglink1` varchar(200) DEFAULT NULL,
  `imglink2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `Supplier_id_idx` (`Supplier_id`),
  KEY `Admin_id_idx` (`Admin_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1001,'Adidas Running Shoes','Comfortable for Running',1099.00,1599.99,'Shoes',501,101,NULL,NULL),(1002,'Red Tape Running Shoes','Comfortable for Running',1399.00,1799.99,'Shoes',501,101,NULL,NULL),(1003,'Baggit Bagpack','Premium Bagpack',899.00,1599.99,'Bagpack',505,102,NULL,NULL),(1004,'Puma Shoes','Sports Shoes',1299.00,1599.00,'Shoes',503,103,NULL,NULL),(1005,'Nike Shoes','Casual Shoes',999.00,1299.00,'Shoes',504,104,NULL,NULL),(1006,'Campus Shoes','Sports Shoes',1099.99,1299.00,'Shoes',504,103,'abc','abc'),(1007,'Puma Shoes','Sports Shoes',999.99,1199.99,'Shoes',504,103,'abc','abc');
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
  `imglink1` varchar(200) DEFAULT NULL,
  `imglink2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `Supplier_id` (`Supplier_id`),
  KEY `Admin_id` (`Admin_id`),
  KEY `Product_id` (`Product_id`),
  CONSTRAINT `products_log_ibfk_1` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`),
  CONSTRAINT `products_log_ibfk_2` FOREIGN KEY (`Admin_id`) REFERENCES `admins` (`Admin_id`),
  CONSTRAINT `products_log_ibfk_3` FOREIGN KEY (`Product_id`) REFERENCES `products` (`Product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_log`
--

LOCK TABLES `products_log` WRITE;
/*!40000 ALTER TABLE `products_log` DISABLE KEYS */;
INSERT INTO `products_log` VALUES (1,'UPDATE','2023-10-23 05:55:59',1001,'Adidas Running Shoes','Comfortable for Running',1099.00,1399.00,'Shoes',501,101,NULL,NULL),(2,'UPDATE','2023-10-23 05:56:37',1002,'Red Tape Running Shoes','Comfortable for Running',1399.00,1699.00,'Shoes',501,101,NULL,NULL),(3,'UPDATE','2023-10-27 05:54:54',1003,'Baggit Bagpack','Premium Bagpack',899.00,1299.00,'Bagpack',505,102,NULL,NULL);
/*!40000 ALTER TABLE `products_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-27 11:26:20
