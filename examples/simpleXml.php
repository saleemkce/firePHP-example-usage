<?php
/**
 * exmple with SimpleXML
 *
 * SimpleXMLElement::asXML — Return a well-formed XML string based on SimpleXML element
 * 
 */

// Include the server library
require_once('../FirePHP/lib/FirePHPCore/FirePHP.class.php');

// Start output buffering
//ob_start();

$firephp = FirePHP::getInstance(true);

$firephp->setEnabled(true);  // or FB::

$string = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<CATALOG>
	<CD>
		<TITLE>Empire Burlesque</TITLE>
		<ARTIST>Bob Dylan</ARTIST>
		<COUNTRY>USA</COUNTRY>
		<COMPANY>Arizona</COMPANY>
		<PRICE>10.90</PRICE>
		<YEAR>1985</YEAR>
	</CD>
	<CD>
		<TITLE>Hide your heart</TITLE>
		<ARTIST>Bonnie Tyler</ARTIST>
		<COUNTRY>UK</COUNTRY>
		<COMPANY>CBS Records</COMPANY>
		<PRICE>9.90</PRICE>
		<YEAR>1988</YEAR>
	</CD>
	<CD>
		<TITLE>Hide your heart ||</TITLE>
		<ARTIST>Bonnie</ARTIST>
		<COUNTRY>UK</COUNTRY>
		<COMPANY>CBS Records</COMPANY>
		<PRICE>10</PRICE>
		<YEAR>1900</YEAR>
	</CD>
	<CD>
		<TITLE>Greatest Hits</TITLE>
		<ARTIST>Dolly</ARTIST>
		<COUNTRY>USA</COUNTRY>
		<COMPANY>RCA</COMPANY>
		<PRICE>9.90</PRICE>
		<YEAR>1982</YEAR>
	</CD>
	<CD>
		<TITLE>Allen Winston</TITLE>
		<ARTIST>Bob Dylan</ARTIST>
		<COUNTRY>USA</COUNTRY>
		<COMPANY>Columbia</COMPANY>
		<PRICE>20.50</PRICE>
		<YEAR>1980</YEAR>
	</CD>
	<CD>
		<TITLE>All in the family</TITLE>
		<ARTIST>McChann</ARTIST>
		<COUNTRY>USA</COUNTRY>
		<COMPANY>Columbia</COMPANY>
		<PRICE>12.50</PRICE>
		<YEAR>1950</YEAR>
	</CD>
	<CD>
		<TITLE>Allen Winston Joane</TITLE>
		<ARTIST>Bob Dylan</ARTIST>
		<COUNTRY>USA</COUNTRY>
		<COMPANY>Columbia</COMPANY>
		<PRICE>20.50</PRICE>
		<YEAR>1980</YEAR>
	</CD>
	<CD>
		<TITLE>Still got the blues</TITLE>
		<ARTIST>Gary Moore</ARTIST>
		<COUNTRY>UK</COUNTRY>
		<COMPANY>Virgin records</COMPANY>
		<PRICE>10.20</PRICE>
		<YEAR>1990</YEAR>
	</CD>
	<CD>
		<TITLE>Winston</TITLE>
		<ARTIST>Bob Dylan</ARTIST>
		<COUNTRY>UK</COUNTRY>
		<COMPANY>Columbia</COMPANY>
		<PRICE>25.50</PRICE>
		<YEAR>1975</YEAR>
	</CD>
</CATALOG>
XML;

$xml = new SimpleXMLElement($string);

$xmlOutput = $xml->asXML();

$firephp->log($xml);

?>