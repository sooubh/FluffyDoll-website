import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const cleanArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === '--host') {
    cleanArgs.push('-H', rawArgs[i + 1] || '0.0.0.0');
    i++;
  } else if (rawArgs[i] === '--port' || rawArgs[i] === '-p') {
    cleanArgs.push('-p', rawArgs[i + 1] || '3000');
    i++;
  } else {
    cleanArgs.push(rawArgs[i]);
  }
}

if (!cleanArgs.includes('-p')) {
  cleanArgs.push('-p', '3000');
}
if (!cleanArgs.includes('-H') && !cleanArgs.includes('--hostname')) {
  cleanArgs.push('-H', '0.0.0.0');
}

const child = spawn('npx', ['next', 'dev', ...cleanArgs], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
