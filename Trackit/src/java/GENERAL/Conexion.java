package GENERAL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Conexion {
    
    private String server="localhost";
    private String dbname="trackit";
    private String port="3306";
    private String user="user";
    private String passw="123456";    
    private Connection con;
    
    public Conexion(){
        con=null;
    }
    
    public void conectar() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.jdbc.Driver");
        String url="jdbc:mysql://"+server+":"+port+"/"+dbname;
        con = DriverManager.getConnection(url, user, passw);
        
    };
    
    public void cerrar() throws SQLException{
        if(con!=null)
            con.close();
    };
    
    public PreparedStatement prepareStatement(String sql) throws SQLException{
        return con.prepareStatement(sql);
    }
    
    public void autoCommit(boolean commit) throws SQLException{
        if(con!=null)
            con.setAutoCommit(commit);
    }
    
    public void Commit() throws SQLException{
        if(con!=null)
            con.commit();
    }
    
    public void Rollback() throws SQLException{
        if(con!=null)
            con.rollback();
    }
    
}
