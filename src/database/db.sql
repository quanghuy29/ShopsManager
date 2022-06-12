-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: shop_manager_system
-- ------------------------------------------------------
-- Server version	5.5.27

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
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `CategoryID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(45) NOT NULL,
  `Description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'Device','Device');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `CustomerID` bigint(20) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `Phone` varchar(45) NOT NULL,
  `Email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'Quang','Huy','Hanoi','23456789','abc');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Department`
--

DROP TABLE IF EXISTS `Department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Department` (
  `DepartmentID` bigint(20) NOT NULL AUTO_INCREMENT,
  `DepartmentName` varchar(45) NOT NULL,
  PRIMARY KEY (`DepartmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department`
--

LOCK TABLES `Department` WRITE;
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
INSERT INTO `Department` VALUES (1,'titki');
/*!40000 ALTER TABLE `Department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderTb`
--

DROP TABLE IF EXISTS `OrderTb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderTb` (
  `OrderID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CustomerID` bigint(20) NOT NULL,
  `ShopID` bigint(20) NOT NULL,
  `ShipID` bigint(20) NOT NULL,
  `TotalPrice` float NOT NULL,
  `OrderNumber` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `ShippedDate` datetime DEFAULT NULL,
  `ShippingFee` float NOT NULL,
  `TransitionFee` float NOT NULL,
  `TotalPayment` float NOT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `fk_order_customer_idx` (`CustomerID`),
  KEY `fk_order_shop_idx` (`ShopID`),
  KEY `fk_order_ship_idx` (`ShipID`),
  CONSTRAINT `fk_order_customer` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`CustomerID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_ship` FOREIGN KEY (`ShipID`) REFERENCES `Ship` (`ShipID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_shop` FOREIGN KEY (`ShopID`) REFERENCES `Shop` (`ShopID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderTb`
--

LOCK TABLES `OrderTb` WRITE;
/*!40000 ALTER TABLE `OrderTb` DISABLE KEYS */;
INSERT INTO `OrderTb` VALUES (1,1,2,1,10,0,1,'2022-12-12 07:00:00','2022-12-12 07:00:00',NULL,1,0,100);
/*!40000 ALTER TABLE `OrderTb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order_Product`
--

DROP TABLE IF EXISTS `Order_Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Order_Product` (
  `OrderProductID` bigint(20) NOT NULL AUTO_INCREMENT,
  `OrderId` bigint(20) NOT NULL,
  `ProductID` bigint(20) NOT NULL,
  `OrderNumber` int(11) NOT NULL,
  PRIMARY KEY (`OrderProductID`),
  KEY `fk_product_idx` (`ProductID`),
  KEY `fk_order_idx` (`OrderId`),
  CONSTRAINT `fk_order` FOREIGN KEY (`OrderId`) REFERENCES `OrderTb` (`OrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order_Product`
--

LOCK TABLES `Order_Product` WRITE;
/*!40000 ALTER TABLE `Order_Product` DISABLE KEYS */;
INSERT INTO `Order_Product` VALUES (1,1,1,1);
/*!40000 ALTER TABLE `Order_Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `ProductID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ShopID` bigint(20) DEFAULT NULL,
  `CategoryID` bigint(20) NOT NULL,
  `ProductName` varchar(45) NOT NULL,
  `Detail` varchar(45) DEFAULT NULL,
  `Price` float NOT NULL,
  `Available` int(11) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `Image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  KEY `shopid_idx` (`ShopID`),
  KEY `categoryid_idx` (`CategoryID`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`CategoryID`) REFERENCES `Category` (`CategoryID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_shop` FOREIGN KEY (`ShopID`) REFERENCES `Shop` (`ShopID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,2,1,'laptop','laptop',10,1,'0000-00-00 00:00:00',NULL);
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RegisterOrder`
--

DROP TABLE IF EXISTS `RegisterOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RegisterOrder` (
  `RegisterID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ShopID` bigint(20) NOT NULL,
  `PaymentMoney` float NOT NULL,
  `PaymentDate` datetime NOT NULL,
  `State` varchar(45) NOT NULL,
  PRIMARY KEY (`RegisterID`),
  KEY `shopid_idx` (`ShopID`),
  KEY `shopOrderid_idx` (`ShopID`),
  CONSTRAINT `fk_register_shop` FOREIGN KEY (`ShopID`) REFERENCES `Shop` (`ShopID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RegisterOrder`
--

LOCK TABLES `RegisterOrder` WRITE;
/*!40000 ALTER TABLE `RegisterOrder` DISABLE KEYS */;
/*!40000 ALTER TABLE `RegisterOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Role` (
  `roleid` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `code` varchar(45) NOT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
INSERT INTO `Role` VALUES (1,'admin','admin'),(2,'shop','shop');
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ship`
--

DROP TABLE IF EXISTS `Ship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ship` (
  `ShipID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CompanyName` varchar(45) NOT NULL,
  PRIMARY KEY (`ShipID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ship`
--

LOCK TABLES `Ship` WRITE;
/*!40000 ALTER TABLE `Ship` DISABLE KEYS */;
INSERT INTO `Ship` VALUES (1,'Giaohangnhanh');
/*!40000 ALTER TABLE `Ship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shop`
--

DROP TABLE IF EXISTS `Shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Shop` (
  `ShopID` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserID` bigint(20) NOT NULL,
  `ShopName` varchar(45) NOT NULL,
  `Website` varchar(45) DEFAULT NULL,
  `Address` varchar(45) NOT NULL,
  `Detail` varchar(45) DEFAULT NULL,
  `Phone` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `State` int(11) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `LastRegisterDate` datetime DEFAULT NULL,
  `ExpirationDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ShopID`),
  KEY `user_idx` (`UserID`),
  CONSTRAINT `fk_shop_user` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shop`
--

LOCK TABLES `Shop` WRITE;
/*!40000 ALTER TABLE `Shop` DISABLE KEYS */;
INSERT INTO `Shop` VALUES (2,1,'quang',NULL,'thai binh','ban laptop','654321','abc',1,'2022-01-01 00:00:00','2022-04-04 00:00:00',NULL),(3,1,'quanghuy1','alo','ha noi','ban my pham','123','abc',0,'2022-06-09 20:54:17',NULL,NULL);
/*!40000 ALTER TABLE `Shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `UserID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RoleID` bigint(20) DEFAULT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `Phone` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `LastLogin` datetime DEFAULT NULL,
  `State` int(11) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  KEY `role_idx` (`RoleID`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`roleid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,2,'Quang','Huy','012345678','sad','123456','2022-12-12 00:00:00','2022-12-15 00:00:00',1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-12  9:26:36
