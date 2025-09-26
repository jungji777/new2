# 2025-portfolio

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/jungji777/2025-portfolio)

## 📧 Configuración del Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** generado

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template como base:

```
Asunto: Nuevo mensaje de contacto - {{subject}}

Hola César,

Has recibido un nuevo mensaje de contacto desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado el: {{timestamp}}
Responder a: {{reply_to}}
```

4. Copia el **Template ID** generado

### 4. Obtener Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key**

### 5. Actualizar configuración
Edita el archivo `src/services/emailService.ts` y reemplaza:

```typescript
const EMAILJS_SERVICE_ID = 'tu_service_id_aqui';
const EMAILJS_TEMPLATE_ID = 'tu_template_id_aqui';
const EMAILJS_PUBLIC_KEY = 'tu_public_key_aqui';
```

### 6. Configurar límites (opcional)
En EmailJS puedes configurar:
- Límite de emails por mes (200 gratis)
- Filtros anti-spam
- Notificaciones de entrega

## ✨ Funcionalidades Implementadas

### Formulario de Contacto
- ✅ Validación en tiempo real
- ✅ Envío de emails funcional
- ✅ Manejo de errores
- ✅ Estados de carga
- ✅ Mensajes de confirmación
- ✅ Diseño responsive

### Previews de Certificaciones
- ✅ Modales interactivos
- ✅ Visualización de certificados
- ✅ Información detallada
- ✅ Navegación con teclado
- ✅ Responsive design
- ✅ Lazy loading de imágenes# new2
