-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shopit
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
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (101,'Deepali','Mahato','Intern','2023-09-15','7389573480','ahemdabad ','deepalimahato1019 ','dp_1910','Deepali219'),(102,'Mohit ','Sharma','Intern','2022-10-02','9091032345','Raipur','mohitsharma20@gmail.com','mohit_20','mohit2123'),(103,'Rahul','Ved','Intern','2020-05-15','8912893478','Mumbai','rahulved34@gmail.com','rahul_34','rahul@123'),(104,'Priyanka','Sao','Assistant ','2022-12-01','8901278600','Delhi ','priyankasao26@gmail.com','priyanka_26','78werttt@'),(105,'Pihu','Mahato','Intern','2023-01-10','8901289765','Kolkata','pihumahato76@gmail.com','pihu_76','priya2143');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (501,'bata','mukesh ','mukeshverma13@gmail.com','7823345908','delhi',101,'mukesh_90','45678901'),(502,'veromoda','ritu','ritukumari16@gmail.com','8912347700','delhi',102,'ritu_kk','88888888888888'),(503,'puma','reena','reenagupta10@gmail.com','9802783410','jaipur',103,'reena_g15','9999911111'),(504,'nike','priya','priyashukla34@gmail.com','8901235641','kerala',104,'prira_k56','566667771'),(505,'baggit','Kartik ','kartikv345@gmail.com','8704590111','jaipur',105,'kartik_aa','ujkrrrrrr');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2023-10-19 12:34:00
