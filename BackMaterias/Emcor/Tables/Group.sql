CREATE TABLE [dbo].[Group]
(
	[Id] INT IDENTITY NOT NULL PRIMARY KEY, 
    [Teacher_id] INT NULL, 
    [Room] NVARCHAR(30) NULL, 
    [Semester] NVARCHAR(50) NULL, 
    [Schedule] NVARCHAR(100) NULL, 
    [Subject_id] INT NULL, 
    [Title] NVARCHAR(100) NULL, 
    CONSTRAINT [FK_Group_Teacher] FOREIGN KEY ([Teacher_id]) REFERENCES [Teacher]([Id]),
    CONSTRAINT [FK_Group_Subject] FOREIGN KEY ([Subject_id]) REFERENCES [Subject]([Id]) 
	
)
