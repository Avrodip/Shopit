-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: aha
-- ------------------------------------------------------
-- Server version	8.0.33

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
  CONSTRAINT `Supplier_id` FOREIGN KEY (`Supplier_id`) REFERENCES `suppliers` (`Supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1001,'Adidas Running Shoes','Comfortable for Running',1099.00,1599.99,'Shoes',501,101,'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86ca4c29d16048b3a5b4af7e004b0feb_9366/STREETAHEAD_SHOES_Grey_GC0650_01_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6420df378bcf49329e31af7e00596bcc_9366/STREETAHEAD_SHOES_Grey_GC0650_02_standard_hover.jpg'),(1002,'Red Tape Running Shoes','Comfortable for Running',1399.00,1799.99,'Shoes',501,101,'https://m.media-amazon.com/images/I/61WVDXHWQcL._UY675_.jpg','https://m.media-amazon.com/images/I/71kIo5Imj0L._UY535_.jpg'),(1003,'Baggit Bagpack','Premium Bagpack',899.00,1299.00,'Bagpack',505,102,'https://d3f4274tyu126k.cloudfront.net/catalog/product/cache/6d0081f087519544d88cf36c4d5f516b/l/_/l_kline_jenkin_hd_gravity_green_green_m2_a_2140473_m_1.webp','https://d3f4274tyu126k.cloudfront.net/catalog/product/cache/6d0081f087519544d88cf36c4d5f516b/l/_/l_kline_jenkin_hd_gravity_green_green_m2_a_2140473_a_2_1.webp'),(1004,'Puma Shoes','Sports Shoes',1299.00,1599.00,'Shoes',503,103,'https://m.media-amazon.com/images/I/713UmakQhoL._UY675_.jpg','https://m.media-amazon.com/images/I/81zvjTVzREL._UY535_.jpg'),(1005,'Nike Shoes','Casual Shoes',999.00,1299.00,'Shoes',504,104,'https://m.media-amazon.com/images/I/61LFuEQGv5L._UY675_.jpg','https://m.media-amazon.com/images/I/613uP2s0jZL._UY535_.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-26 23:04:20
