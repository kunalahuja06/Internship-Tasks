using EmpService.Contracts;
using Services;
using PetaPoco;
using PetaPoco.Providers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
{
    builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
}));
var connectionString = builder.Configuration["Data:ConnectionStrings:DefaultConnectionString"];
builder.Services.AddScoped((a) =>
{
    var db = new Database(connectionString, new MySqlConnectorDatabaseProvider());
    return db;
});
builder.Services.AddScoped<IEmployeeService, EmployeeService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("CorsPolicy");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
