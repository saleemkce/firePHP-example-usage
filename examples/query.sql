CREATE TABLE tos(id INT AUTO_INCREMENT,
	tos_id INT,
	tos_session_key VARCHAR(50),
	url VARCHAR(10000),
	title VARCHAR(5000),
	entry_time datetime,
	exit_time datetime,
	timeonpage INT,
	timeonpage_tracked_by VARCHAR(15),
	timeonsite INT,
	trackingtype VARCHAR(15),
	realtime_tracking BOOLEAN NOT NULL DEFAULT 0,
	transferred_with VARCHAR(15) NULL,
	PRIMARY KEY ( id )) CHARACTER SET utf8 COLLATE utf8_general_ci