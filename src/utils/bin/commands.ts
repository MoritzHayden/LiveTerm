// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += '\n' + Object.keys(bin).sort()[i - 1];
  }
  return `Welcome! Here are all the available commands:
${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.`;
};

// About
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest! Here are the ways you can support my work:
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.github_sponsors}" target="_blank">GitHub Sponsors</a></u>
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">Paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `passwords\npersonal projects\nsecrets`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Well, um, what exactly were you trying to do just now? 📸`;
};

export const mkdir = async (args: string[]): Promise<string> => {
  return `Sorry, I'm out of server space! Please consider <u><a href="${config.donate_urls.github_sponsors}" target="_blank">donating</a></u>.`;
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `How about you sudon't?`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
█████   █████                          █████                        ██████   ██████                     ███   █████              
░░███   ░░███                          ░░███                        ░░██████ ██████                     ░░░   ░░███               
 ░███    ░███   ██████   █████ ████  ███████   ██████  ████████      ░███░█████░███   ██████  ████████  ████  ███████    █████████
 ░███████████  ░░░░░███ ░░███ ░███  ███░░███  ███░░███░░███░░███     ░███░░███ ░███  ███░░███░░███░░███░░███ ░░░███░    ░█░░░░███ 
 ░███░░░░░███   ███████  ░███ ░███ ░███ ░███ ░███████  ░███ ░███     ░███ ░░░  ░███ ░███ ░███ ░███ ░░░  ░███   ░███     ░   ███░  
 ░███    ░███  ███░░███  ░███ ░███ ░███ ░███ ░███░░░   ░███ ░███     ░███      ░███ ░███ ░███ ░███      ░███   ░███ ███   ███░   █
 █████   █████░░████████ ░░███████ ░░████████░░██████  ████ █████    █████     █████░░██████  █████     █████  ░░█████   █████████
░░░░░   ░░░░░  ░░░░░░░░   ░░░░░███  ░░░░░░░░  ░░░░░░  ░░░░ ░░░░░    ░░░░░     ░░░░░  ░░░░░░  ░░░░░     ░░░░░    ░░░░░   ░░░░░░░░░ 
                          ███ ░███                                                                                                
                         ░░██████                                                                                                 
                          ░░░░░░                                                                                                  

Type 'sumfetch' to display summary.
Type 'help' to see the list of available commands.
`;
};
