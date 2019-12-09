CREATE TABLE [dbo].[GroupDetail]
(
	[Id] INT IDENTITY NOT NULL PRIMARY KEY,
	[Group_id] INT,
	[Student_id] INT
    CONSTRAINT [FK_GroupDetail_Group] FOREIGN KEY ([Group_id]) REFERENCES [Group]([Id]),
    CONSTRAINT [FK_GroupDetail_Student] FOREIGN KEY ([Student_id]) REFERENCES [Student]([Id]) 
	
	
)
