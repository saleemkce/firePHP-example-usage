/**
 * tos create table example
 */

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
	tracking_type VARCHAR(15),
	realtime_tracking BOOLEAN NOT NULL DEFAULT 0,
	transferred_with VARCHAR(15) NULL,
	PRIMARY KEY ( id )) CHARACTER SET utf8 COLLATE utf8_general_ci



/**
 * activity create table example
 */

CREATE TABLE activity(id INT AUTO_INCREMENT,
	tos_id INT,
	tos_session_key VARCHAR(50),
	url VARCHAR(10000),
	title VARCHAR(5000),
	activity_duration INT,
	activity_duration_tracked_by VARCHAR(15),
	activity_start DATETIME,
	activity_end DATETIME,
	tracking_type VARCHAR(15),
	realtime_tracking BOOLEAN NOT NULL DEFAULT 0,
	transferred_with VARCHAR(15) NULL,
	PRIMARY KEY ( id )) CHARACTER SET utf8 COLLATE utf8_general_ci
