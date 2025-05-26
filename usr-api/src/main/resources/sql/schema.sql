CREATE TABLE Post (
                      PostID INT PRIMARY KEY,
                      Title VARCHAR(255),
                      Content TEXT,
                      Category VARCHAR(100),
                      PublicationDate TIMESTAMP,
                      Tags VARCHAR(255)
);

CREATE TABLE User (
                      UserID INT PRIMARY KEY,
                      Username VARCHAR(50),
                      Email VARCHAR(255),
                      Password VARCHAR(255),
                      Bio TEXT,
                      ProfilePicture VARCHAR(255)
);

CREATE TABLE Comment (
                         CommentID INT PRIMARY KEY,
                         PostID INT,
                         UserID INT,
                         Content TEXT,
                         Timestamp TIMESTAMP,
                         FOREIGN KEY (PostID) REFERENCES Post(PostID),
                         FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE Interaction (
                             InteractionID INT PRIMARY KEY,
                             UserID INT,
                             PostID INT,
                             Type VARCHAR(50),
                             Timestamp TIMESTAMP,
                             FOREIGN KEY (UserID) REFERENCES User(UserID),
                             FOREIGN KEY (PostID) REFERENCES Post(PostID)
);