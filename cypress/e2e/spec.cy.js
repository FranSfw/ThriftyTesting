describe("Pruebas página thrifty (pantalla usuario)", () => {
  beforeEach(() => {
    cy.visit("http://localhost/ThriftyAdmin/");
    cy.wait(1000);
  });

  it("Hacer login como usuario", () => {
    cy.get("#input_email").type("victorosornio2@employee.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como usuario sin contraseña", () => {
    cy.get("#input_email").type("victorosornio2@employee.com");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como usuario con contraseña incorrecta", () => {
    cy.get("#input_email").type("victorosornio2@employee.com");
    cy.get("#input_password").type("12345");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como usuario sin correo", () => {
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como usuario con correo incorrecto", () => {
    cy.get("#input_email").type("victorosornio@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Hacer login como administrador", () => {
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador sin contraseña", () => {
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador con contraseña incorrecta", () => {
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("12345");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador sin correo", () => {
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador con correo incorrecto", () => {
    cy.get("#input_email").type("angelperez@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login sin correo ni contraseña", () => {
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Ir a pantalla de administrador", () => {
    cy.get("#login_admin").click();
    cy.wait(2000);
  });
});

describe("Pruebas página thrifty (pantalla administrador)", () => {
  beforeEach(() => {
    cy.visit("http://localhost/ThriftyAdmin/");
    cy.wait(1000);
  });

  it("Hacer login como administrador", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador sin contraseña", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador con contraseña incorrecta", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("12345");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador sin correo", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como administrador con correo incorrecto", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login como usuario", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("victorosornio2@employee.com");
    cy.get("#input_password").type("123");
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Intentar hacer login sin correo ni contraseña", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#button_login").click();
    cy.wait(2000);
  });

  it("Ir a creación de usuario como administrador", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario como administrador sin contraseña", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario como administrador con contraseña incorrecta", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("12345");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario como administrador sin correo", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario como administrador con correo incorrecto", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario como usuario", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("victorosornio2@employee.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Intentar ir a creación de usuario sin correo ni contraseña", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Ir a creación de usuario como administrador", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(2000);
  });

  it("Devolverse a login de empleado", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#login_employee").click();
    cy.wait(2000);
  });
});

describe("Pruebas página thrifty (pantalla crear usuario)", () => {
  beforeEach(() => {
    cy.visit("http://localhost/ThriftyAdmin/");
    cy.wait(1000);
  });

  it("Ir a pantalla de login de administrador", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#button_login_admin").click()
  });
  /*
  it("Crear usuario", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });
  */  
  it("Intentar crear usuario sin nombre", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin apellido", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin genero", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin fecha de nacimiento", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin CURP", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin RFC", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin email personal", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin confirmar email personal", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin numero de teléfono", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin correo de trabajo", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin password", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin confirmar password", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin dirección", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin tipo", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin código postal", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin ciudad", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario sin nada", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con correo personal y correo de confirmación diferentes", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("123")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con password y password de confirmación diferentes", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("12345")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con CURP corta", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("12345")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con RFC corta", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("12345")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con numero de telefono corto", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("631113")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("12345")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83250")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar crear usuario con codigo postal corto", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_name").type("Miguel Angel")
    cy.get("#input_last_name").type("Arroyo Lopez")
    cy.get("#select_gender").select("Male")
    cy.get("#input_birth_date").type("2004-06-06")
    cy.get("#input_CURP").type("AOLM040606HSRRPGA8")
    cy.get("#input_RFC").type("AOLM040606UM1")
    cy.get("#input_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_confirm_personal_email").type("arroyomiguel590@gmail.com")
    cy.get("#input_phone").type("6311130239")
    cy.get("#input_work_email").type("miguelarroyo6@employee.com")
    cy.get("#input_password").type("123")
    cy.get("#input_confirm_password").type("12345")
    cy.get("#input_address").type("Aurora #77, Palmar del Sol")
    cy.get("#input_type").type("Casa")
    cy.get("#input_postal_code").type("83")
    cy.get("#input_city").type("Hermosillo")
    cy.get("#button_create_user").click()
  });

  it("Intentar insertar más caracteres de los permitidos en el CURP", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_CURP").type("AOLM040606HSRRPGA888888")
    cy.wait(2000);
  });

  it("Intentar insertar más caracteres de los permitidos en el RFC", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_RFC").type("AOLM040606UM111111")
    cy.wait(2000);
  });

  it("Intentar insertar más caracteres de los permitidos en el numero de telefono", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_phone").type("631113023999999")
    cy.wait(2000);
  });

  it("Intentar insertar más caracteres de los permitidos en el codigo postal", () => {
    cy.get("#login_admin").click();
    cy.wait(1000);
    cy.get("#input_email").type("angelperez1@admin.com");
    cy.get("#input_password").type("123");
    cy.get("#button_new_user").click();
    cy.wait(1000);
    cy.get("#input_postal_code").type("8325000000")
    cy.wait(2000);
  });
});