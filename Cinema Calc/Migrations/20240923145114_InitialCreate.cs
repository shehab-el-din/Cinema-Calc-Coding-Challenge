using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Cinema_Calc.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Expenses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    Percentage_Markup = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenses", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Expenses",
                columns: new[] { "Id", "Name", "Percentage_Markup", "Price" },
                values: new object[,]
                {
                    { 1, "Expense 1", 11.0, 100.0 },
                    { 2, "Expense 2", 12.0, 200.0 },
                    { 3, "Expense 3", 13.0, 300.0 },
                    { 4, "Expense 4", 14.0, 400.0 },
                    { 5, "Expense 5", 15.0, 500.0 },
                    { 6, "Expense 6", 16.0, 600.0 },
                    { 7, "Expense 7", 17.0, 700.0 },
                    { 8, "Expense 8", 18.0, 800.0 },
                    { 9, "Expense 9", 19.0, 900.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Expenses");
        }
    }
}
