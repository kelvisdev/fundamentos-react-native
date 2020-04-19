import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com Físico: IP da máquina
 * Android com Emulador: localhost fazendo o (adb reverse tcp:porta tcp:porta)
 * Android com Emulador: 10.0.2.2 (Android Studio) IP espeficico do android emulador
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com Físico: IP da máquina
 */