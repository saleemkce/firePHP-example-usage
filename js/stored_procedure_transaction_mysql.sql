CREATE DEFINER=`facpuser`@`%` PROCEDURE `Usp_test_get_details`()
BEGIN
	/* Variables declaration block --Starts */
	DECLARE poid VARCHAR(1000);
    Declare pi varchar(1000);
    
    /* Variables declaration block --Ends */
    
    /* Rollback on Error block --Starts */
	DECLARE errno INT;
    /*Include if needed warning too. DECLARE EXIT HANDLER FOR SQLEXCEPTION, SQLWARNING */
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
		SELECT errno AS MYSQL_ERROR;
		ROLLBACK;
	END;
    /* Rollback on Error block --Ends */
	
    /* Transaction & code block --Starts */
	START TRANSACTION;
		/* INSERT INTO `DB`.`Users` (`data`) 
        VALUES 
        ('12345);
        */
		
		-- select * from (SIGNAL SQLSTATE '1054') as msg;
        
        Set poid = (select group_concat(globalUserId, firstName) from ((SELECT globalUserID, firstName, DUMMMMMMMMMMMy from Users order by createdOn desc limit 1)) AS userData);
        
        SELECT concat(poid, "success") as mgs;
		
	COMMIT;
    /* Transaction & code block --Ends */

END
