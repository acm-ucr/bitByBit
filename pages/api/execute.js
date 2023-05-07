import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.post(process.env.NEXT_PUBLIC_JUDGE0_API_URL, {
    source_code: req.body.source_code,
    language_id: req.body.language_id,
    number_of_runs: null,
    stdin: req.body.stdin,
    expected_output: null,
    cpu_time_limit: null,
    cpu_extra_time: null,
    wall_time_limit: null,
    memory_limit: null,
    stack_limit: null,
    max_processes_and_or_threads: null,
    enable_per_process_and_thread_time_limit: null,
    enable_per_process_and_thread_memory_limit: null,
    max_file_size: null,
    enable_network: null,
  });

  if (response.status === 201) {
    const output = {
      stdout: response.data.stdout,
      time: response.data.time,
      exit_code: response.data.exit_code,
      status: response.data.status,
    };
    res.status(200).json(output);
  } else {
    res.status(500).json();
  }
}
